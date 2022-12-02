import Image from "next/image";

const Footer = () => {
   return (
      <div>
         <div className="responsive-top-footer">
            <div className="logo">
               <Image
                  src="/images/topbar/ministery-logo.svg"
                  alt="ministère du travail, de l'emploi et de l'insertion"
                  width="144px"
                  height="80px"
               />
            </div>
            <div className="logo">
               <Image
                  src="/images/topbar/invest-logo.svg"
                  alt="investir dans vos compétences"
                  width="224px"
                  height="80px"
               />
            </div>
            <div className="logo">
               <Image
                  src="/images/topbar/gip-logo.svg"
                  alt="gip alfa centre-val de loire"
                  width="96px"
                  height="80px"
               />
            </div>
         </div>
         <footer className="footer">
            <div className="footer-main">
               <div className="footer-span">
                  <span>Le GIP Alfa Centre-Val de Loire, CARIF-OREF de la Région Centre-Val de Loire</span>
               </div>
               <div className="footer-cgu">
                  <div className="label">Site Étoile</div>
                  <div className="label">Nous contacter</div>
                  <div className="label">Mentions légales</div>
               </div>
            </div>
         </footer>
      </div>
   );
};

export default Footer;
