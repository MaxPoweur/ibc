interface CustomFetchSettings {
   method?: string;
   data?: any;
   bonusHeaders?: any;
   token?: string;
   isFormData?: boolean;
}

const ApiHelper = {
   API_URL: 'http://localhost:8000/api',
   async fetch(
      endpoint: string,
      settings: CustomFetchSettings = {
         method: 'GET',
         data: null,
         bonusHeaders: {},
      }
   ) {
      let url = ApiHelper.API_URL + endpoint;
      let headers = {
         Accept: 'application/json',
         ...settings.bonusHeaders,
      };
      if (!settings.isFormData) {
         headers['Content-Type'] = 'application/json';
      }
      if (settings.token) {
         headers['Authorization'] = 'Bearer ' + settings.token;
      }
      try {
         let fetchSettings: RequestInit = {
            method: settings.method,
            headers,
         };
         if (settings.data) {
            if (settings.method != 'GET' && settings.method != 'HEAD') {
               if (settings.isFormData) {
                  fetchSettings.body = settings.data;
               } else {
                  fetchSettings.body = JSON.stringify(settings.data);
               }
            } else {
               let params = new URLSearchParams(settings.data);
               url += '?' + params;
            }
         }
         let response = await fetch(url, fetchSettings);
         let jsonResponse = await response.json();
         return jsonResponse;
      } catch (error: any) {
         console.error('API FETCH error', error);
      }
   },
};

export default ApiHelper;
