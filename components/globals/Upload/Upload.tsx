import { createRef, useRef, useState } from 'react';
import Button from '../Button/Button';
import Textarea from '../Textarea/Textarea';
import styles from './Upload.module.scss';
import { ButtonStyle } from '../Button/Button';

interface UploadProps {
   name: string;
   label: string;
   placeholder?: string;
   defaultValue?: string;
   className?: string;
   onChange?: (value: string) => void;
}
const Upload = (props: UploadProps) => {
   const fileInputRef = useRef<HTMLInputElement>(null);
   const [files, setFiles] = useState<null | FileList>();
   return (
      <div className={`upload-container ${styles.UploadContainer} ${props.className && props.className}`}>
         {files &&
            files.length > 0 ?
            <div className="files">
               {Array.from(files).map((file, index) => <div
                  key={index}
                  className="file"
                  onClick={() => fileInputRef.current?.click()}
               >
                  {file.name}
               </div>)}
            </div>
            :
            <i>Veuillez télécharger un compte-rendu via le bouton ci-dessous.</i>
         }
         <Button
            style={ButtonStyle.REGULAR}
            onClick={() => fileInputRef.current?.click()}
         >
            <>
               <input
                  ref={fileInputRef}
                  className="file-input"
                  type="file"
                  onChange={e => setFiles(e.target.files)}
               />
               Télécharger un fichier
            </>
         </Button>
      </div>
   );
}

export default Upload;