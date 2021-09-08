import { Luminus, OrtgoGard, PerioGard, Sensitive, Total } from "../Constants/Images";

export const Productos_Especializados = {
    idA: 1,
    title: "Prescripción de Productos Especializados para Periodoncia",
    shortTitle: "Periodoncia",
    imgTitle: "Periodoncia",
    productos:[
        {
            id:11,
            image: PerioGard.enjuagueperiogard_50,
            classImg: "vertical",
            name:"Enjuague bucal PerioGard, 250ml #1fco.",
            description: "Enjuagar con 15 ml por 1 min, 2 veces/día por 15 días."
        },
        {
            id:12,
            image: PerioGard.cremaperiogard_50,
            classImg: "horizontal",
            name:"Crema dental PerioGard #1 tubo.",
            description: "Usar diariamente con cepillo PerioGard 3 veces/día."
        },
        {
            id:13,
            image: PerioGard.cepilloperiogard_50,
            classImg: "vertical",
            name:"Cepillo dental PerioGard #1.",
            description: "Cepillar diariamente con crema PerioGard 3 veces/día",
        }
    ]
};

export const Productos_Ortodoncia = {
    idA: 2,
    title: "Prescripción de Productos Especializados para Ortodoncia",
    shortTitle: "Ortodoncia",
    imgTitle: "Ortodoncia",
    productos:[
        {
            id:21,
            image: OrtgoGard.gelorthogard_1_50,
            classImg: "vertical",
            name:"Gel dental OrthoGard #1fco.",
            description: "Aplicar sobre el cepillo Orthogard y cepillar por 2 min, una vez al día."
        },
        {
            id:22,
            image: OrtgoGard.enjuagueorthogard_1_50,
            classImg: "vertical",
            name:"Enjuague bucal OrthoGard, 250ml #1fco.",
            description: "Enjuagar con 15 ml por 1 min, 2 veces/día por 15 días."
        },
        {
            id:23,
            image: OrtgoGard.cepilloorthogard_1_50,
            classImg: "vertical",
            name:"Cepillo dental OrthoGard #1.",
            description: "Cepillar con crema dental Orthogard por 2 min, una vez al día.",
        }
    ]
};

export const Productos_HigieneBucalDiario = {
    idA: 3,
    title: "Prescripción de Productos Higiene Bucal Diario",
    shortTitle: "Higiene Bucal Diario",
    imgTitle: "HigieneBucalDiario",
    productos:[
        {
            id:31,
            image: Total.crematotal12_50,
            classImg: "horizontal",
            name:"Crema dental Colgate Total 12 #1 tubo",
            description: "Usar con cepillo Colgate Total 360 Advanced o Slim Soft 3 veces/día por tiempo indefinido."
        },
        {
            id:32,
            image: Total.enjuaguetotal_50,
            classImg: "vertical",
            name:"Enjuague bucal Colgate Total #1fco.",
            description: "Enjuagar con 15 ml por 1 min, 2 veces/día."
        },
        {
            id:33,
            image: Total.cepillototal_50,
            classImg: "vertical",
            name:"Cepillo dental Total 360 Advanced #1.",
            description: "Cepillar con crema dental Colgate Total 12,  3 veces/día. Uso diario ",
        },
        {
            id:34,
            image: Total.cepilloslim_50,
            classImg: "vertical",
            name:"Cepillo dental Slim Soft #1.",
            description: "Cepillar con crema dental Colgate Total 12,  3 veces/día. Uso diario ",
        }
    ]
};

export const Productos_Hipersensibilidad_Dental = {
    idA: 4,
    title: "Prescripción de Productos Hipersensibilidad Dental",
    shortTitle: "Hipersensibilidad",
    imgTitle: "Hipersensibilidad",
    productos:[
        {
            id:41,
            image: Sensitive.cremasensitivereparacion_50,
            classImg: "horizontal",
            name:"Crema dental Colgate Sensitive Pro Alivio #1 tubo",
            description: "Usar con cepillo Colgate Sensitive Pro Alivio 3 veces/día por tiempo indefinido."
        },
        {
            id:42,
            image: Sensitive.cremasensitiveoriginal_50,
            classImg: "horizontal",
            name:"Crema Dental Sensitive Pro Alivio (Original)",
            description: "#1. tubo. Usar con cepillo dental Colgate PerioGard 3 veces/día, por tiempo indefinido."
        },
        {
            id:43,
            image: Sensitive.enjuaguesensitive_50,
            classImg: "vertical",
            name:"Enjuague bucal Colgate Sensitive Pro Alivio #1fco",
            description: "Enjuagar con 15 ml por 1 min, 2 veces/día",
        },
        {
            id:44,
            image: Sensitive.cepillosensitive_50,
            classImg: "vertical",
            name:"Cepillo dental Colgate Sensitive Pro Alivio #1",
            description: "Cepillar con crema dental Colgate Sensitive Pro Alivio 3 veces/día por tiempo indefinido",
        }
    ]
};

export const Productos_Blanqueaminto_Dental = {
    idA: 5,
    title: "Prescripción de Productos Blanqueamiento Dental",
    shortTitle: "Blanqueamiento",
    imgTitle: "Blanqueamiento",
    productos:[
        {
            id:51,
            image: Luminus.cremaluminous_50,
            classImg: "vertical",
            name:"Crema dental Colgate Luminous White Expert #1 tubo",
            description: "Usar con cepillo Colgate 360 Luminous White Advanced 3 veces/día por tiempo indefinido"
        },
        {
            id:52,
            image: Luminus.enjuagueluminous_50,
            classImg: "vertical",
            name:"Enjuague bucal Colgate Luminous White #1fco",
            description: "Enjuagar con 15 ml por 1 min, 2 veces/día"
        },
        {
            id:53,
            image: Luminus.cepilloluminous_50,
            classImg: "vertical",
            name:"Cepillo dental Colgate 360 Luminous White Advanced #1 ",
            description: "Cepillar con crema dental Colgate 360 Luminous White Advanced 3 veces/día por tiempo indefinido.",
        }
    ]
};