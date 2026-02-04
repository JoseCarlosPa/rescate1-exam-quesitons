import aaos from "../../assets/aaos.jpg";
import codes from "../../assets/codes.png";
import bls from "../../assets/bls.jpg";
import phtl from "../../assets/phtls.jpg";
import nudos from "../../assets/nudos.jpg";
import netter from "../../assets/netter.webp";
import acls from "../../assets/acls.avif";
import moore from "../../assets/moore.webp";
import amls from "../../assets/amls.jpg";
import guyton from "../../assets/guyton.jpg";



export const resources = [
    {
        img: codes,
        title: "Claves Rescate 1",
        subtitle: "Claves utilizadas para comunicación",
        edition: "2006",
        editor: "Rescate 1",
        category: "Referencia",
        download: "https://drive.google.com/uc?export=download&id=1ToAaWjKVdXpQYgTZSD7E5lgrn688JMbv",
    },
    {
        img: aaos,
        title: "Atención Prehospitalaria Básica",
        subtitle: "American Academy of Orthopaedic Surgeons",
        edition: "Undécima edición",
        editor: "Andrew N. Pollak, MD, FAAOS",
        category: "Manual",
        download: "https://drive.google.com/uc?export=download&id=18b2vE-8waCgmiM6ncd_uljH8fXbin7_U",
        link: {url: "https://www.aaos.org/", label: "Sitio web"},
    },
    {
        img: bls,
        title: "Soporte Vital Básico",
        subtitle: "American Heart Association",
        edition: "2021",
        category: "Manual",
        download: "https://drive.google.com/uc?export=download&id=1bCx4PrzkIiNuXz-Y4ZU0jM8UFvynoufL",
        link: {url: "https://shopcpr.heart.org/es/courses/bls", label: "Sitio web"},
    },
    {
        img: acls,
        title: "Soporte Vital Avanzado Cardiovascular",
        subtitle: "American Heart Association",
        edition: "2021",
        category: "Manual",
        download: "https://drive.google.com/file/d/1hlodASdwD_tYP4DpKLKQCzD11r81NGZ-/view?usp=drive_link",
        link: {url: "https://shopcpr.heart.org/es/courses/acls", label: "Sitio web"},
    },
    {
        img: phtl,
        title: "PHTLS Soporte Vital Prehospitalario para Traumatismos",
        subtitle: "American College of Surgeons Association",
        edition: "Décima edición 2023",
        category: "Manual",
        download: "https://drive.google.com/uc?export=download&id=1J0PAh0nONBGmSpiYdyyjemKb-Ujx65fC",
        link: {
            url: "https://www.psglearning.com/es/phtls?srsltid=AfmBOorLGRrP95FMjmKsLpuMyQJA-dZGBP-GCCK5axFAL7XjcsSrsbGq",
            label: "Sitio web"
        },
    },
    {
        img: amls,
        title: "AMLS Soporte Vital Avanzado para Pacientes Médicos",
        subtitle: "National Association of Emergency Medical Technicians",
        edition: "Tercera edición 2021",
        category: "Manual",
        download: "https://drive.google.com/uc?export=download&id=12XTprKF6WJwORjNNG2CrZVbGLh8A6M8i",
        link: {
            url: "https://www.psglearning.com/catalog/productdetails/9781284241488?srsltid=AfmBOoo13GT74b4KRoovcofMkOPddJ9Y3FyN3Y_3JjYYR60QinYLe2gH",
            label: "Sitio web"
        },

    },
    {
        img: moore,
        title: "Anatomía con orientacion clínica",
        subtitle: "Wolters Kluwer/Lippincott Williams & Wilkins",
        edition: "8va edición 2018",
        category: "Atlas",
        download: "https://drive.google.com/uc?export=download&id=1phdI9OR9xcKwUwHiDw27P7q4Khsp6yJ0",
        link: {
            url: "https://www.amazon.com.mx/Anatom%C3%83%C2%AD-orientaci%C3%83%C2%B3n-cl%C3%83%C2%ADnica-Spanish-Keith/dp/8417033637/ref=asc_df_8417033637?mcid=79e06a662b2c384092fcc0c76473e0ef&tag=gledskshopmx-20&linkCode=df0&hvadid=709881970557&hvpos=&hvnetw=g&hvrand=16981546940521121917&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=1010149&hvtargid=pla-451867579848&psc=1&language=es_MX&gad_source=1",
            label: "Comprar"
        },
    },
    {
        img: guyton,
        title: "Tratado de Fisiología Médica By Guyton & Hall. Hall, J.E.",
        subtitle: "Guyton y Hall.",
        edition: "Edición 2021",
        category: "Atlas",
        download: "https://drive.google.com/uc?export=download&id=1VgkXcLljuACETKFas_5o_l3OtW6XqWxO",
        link: {
            url: "https://www.amazon.com/-/es/Guyton-Hall-Tratado-Fisiologia-Médica/dp/8535262857",
            label: "Comprar"
        },
    },
    {
        img: netter,
        title: "Netter Atlas de Anatomía Humana",
        subtitle: "Frank H. Netter, Elsevier",
        edition: "Séptima edición 2023",
        category: "Atlas",
        download: "https://drive.google.com/uc?export=download&id=1w7Zmd73CK41ia1Lok0RYL4kdc4aK5hRV",
        link: {
            url: "https://www.amazon.com.mx/Netter-anatom%C3%ADa-humana-Abordaje-regional/dp/8413823986/ref=sr_1_1?__mk_es_MX=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2LWDOLOA9WUX7&dib=eyJ2IjoiMSJ9.gkCj_-HZMdJkKvTwgd-BzlNH0bY9aRmYcShoRzuh3VbgUsFBGaivTESq9-l_l56vfK5XeqQRIl8vKYfh_W1Js2GqMzwSnVpF8-aDAvGMbXB4asHwKZokAPV9rAKknAXEq9nQr9cADfZoN91mgZ7-LlJO19X6fOAFi96tpomJKIAkp_faIf4aMmqdiN7Hd1byzWU8mHjWIAYWrR6o678BJEabsuBYO7Eolna-AQ40cVGOEau8FR-r_aqNNIA8_wxZhTFDKgJEI7-Hf2vjeLmM1w3aygDxwPcImzGoOpbE6rQ.ldXkP8YRQuCLMJ7kfO36x8IvTjHeGpBwhCMeVqkzsxw&dib_tag=se&keywords=Netter+Atlas+de+anatomia+humana&qid=1746026012&sprefix=netter+atlas+de+anatomia+humana,aps,390&sr=8-1&ufe=app_do:amzn1.fos.de93fa6a-174c-4df7-be7c-5bc8e9c5a71b",
            label: "Comprar"
        },
    },
    {
        img: nudos,
        title: "Nudos Básicos de Rescate y Descensos",
        category: "Referencia",
        download: "https://drive.google.com/uc?export=download&id=12rBumebSfvLmATWFMpGkbusxGobpnk8X",
    },

];

