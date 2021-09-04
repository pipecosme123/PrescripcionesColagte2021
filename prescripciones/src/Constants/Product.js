import { Luminus, OrtgoGard, PerioGard, Sensitive, Total } from "../Constants/Images";

export const Productos_Especializados = {
    idA: 1,
    title: "Prescripción de Productos Especializados para Periodoncia",
    shortTitle: "Periodoncia",
    productos:[
        {
            id:11,
            image: PerioGard.enjuagueperiogard_50,
            name:"Enjuague bucal PerioGard, 250ml.",
            description: "#1fco. Hacer enjuague con 15 ml, por 1 min, hasta 2 veces/día, por 15 días."
        },
        {
            id:12,
            image: PerioGard.cremaperiogard_50,
            name:"Crema dental PerioGard",
            description: "#1 tubo. Usar con cepillo dental PerioGard 3 veces/día Repetir permanentemente"
        },
        {
            id:13,
            image: PerioGard.cepilloperiogard_50,
            name:"Cepillo dental PerioGard",
            description: "#1. Cepillar los dientes con crema dental PerioGard 3 veces/día Repetir permanentemente.",
        }
    ]
};

export const Productos_Ortodoncia = {
    idA: 2,
    title: "Prescripción de Productos Especializados para Ortodoncia",
    shortTitle: "Ortodoncia",
    productos:[
        {
            id:21,
            image: OrtgoGard.gelorthogard_1_50,
            name:"Gel dental OrthoGard",
            description: "#1fco. Hacer enjuague con 15 ml, por 1 min, una vez al día."
        },
        {
            id:22,
            image: OrtgoGard.enjuagueorthogard_1_50,
            name:"Enjuague bucal OrthoGard, 250ml",
            description: "#1fco. Hacer enjuague con 15 ml, por 1 min, hasta 2 veces/día, por 15 días."
        },
        {
            id:23,
            image: OrtgoGard.cepilloorthogard_1_50,
            name:"Cepillo dental OrthoGard",
            description: "#1. Cepillar los dientes con crema dental PerioGard 3 veces/día. Repetir permanentemente.",
        }
    ]
};

export const Productos_RégimenDiario = {
    idA: 3,
    title: "Prescripción de Productos Higiene Bucal Diario",
    shortTitle: "Higiene Bucal Diario",
    productos:[
        {
            id:31,
            image: Total.crematotal12_50,
            name:"Crema dental Total 12",
            description: "#1. tubo. Usar con cepillo dental Total 360 Advanced o Slim Soft 3 veces/día, por tiempo indefinido."
        },
        {
            id:32,
            image: Total.enjuaguetotal_50,
            name:"Enjuague bucal Colagte Total",
            description: "#1fco. Hacer enjuague con 15 ml, por 1 min, hasta 2 veces/día."
        },
        {
            id:33,
            image: Total.cepillototal_50,
            name:"Cepillo Dental Total 360 Advanced",
            description: "#1. Cepillar los dientes con crema dental Total 12 3 veces/día. Repetir permanentemente.",
        },
        {
            id:34,
            image: Total.cepilloslim_50,
            name:"Cepillo Dental Slim Soft",
            description: "#1. Cepillar los dientes con crema dental Total 12 3 veces/día. Repetir permanentemente.",
        }
    ]
};

export const Productos_Hipersensibilidad_Dental = {
    idA: 4,
    title: "Prescripción de Productos Hipersensibilidad Dental",
    shortTitle: "Hipersensibilidad",
    productos:[
        {
            id:41,
            image: Sensitive.cremasensitivereparacion_50,
            name:"Crema Dental Sensitive Pro Alivio (Reparación Completa)",
            description: "#1. tubo. Usar con cepillo dental Colgate Sensitive Pro Alivio 3 veces/día, por tiempo indefinido."
        },
        {
            id:42,
            image: Sensitive.cremasensitiveoriginal_50,
            name:"Crema Dental Sensitive Pro Alivio (Original)",
            description: "#1. tubo. Usar con cepillo dental Colgate PerioGard 3 veces/día, por tiempo indefinido."
        },
        {
            id:43,
            image: Sensitive.enjuaguesensitive_50,
            name:"Enjuague Bucal Sensitive Pro Alivio",
            description: "#1fco. Hacer enjuague con 15 ml, por 1 min, hasta 2 veces/día.",
        },
        {
            id:44,
            image: Sensitive.cepillosensitive_50,
            name:"Cepillo Dental Sensitive Pro Alivio",
            description: "#1. Cepillar los dientes con crema dental Sensitive Pro Alivio 3 veces/día. Repetir permanentemente.",
        }
    ]
};

export const Productos_Blanqueaminto_Dental = {
    idA: 5,
    title: "Prescripción de Productos Blanqueamiento Dental",
    shortTitle: "Blanqueamiento",
    productos:[
        {
            id:51,
            image: Luminus.cremaluminous_50,
            name:"Crema Dental Luminous White Expert",
            description: "#1. tubo. Usar con cepillo dental Colgate 360 Luminous White Advanced 3 veces/día, por tiempo indefinido."
        },
        {
            id:52,
            image: Luminus.enjuagueluminous_50,
            name:"Enjuague Bucal Colgate Luminous White",
            description: "#1fco. Hacer enjuague con 15 ml, por 1 min, hasta 2 veces/día."
        },
        {
            id:53,
            image: Luminus.cepilloluminous_50,
            name:"Cepillo Dental 360 Luminous White Advanced",
            description: "#1. Cepillar los dientes con crema dental Colgate 360 Luminous White Advanced 3 veces/día. Repetir permanentemente.",
        }
    ]
};