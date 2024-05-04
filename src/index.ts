const polytech: {
    adress: string,
    email: string,
    phone_number: number,
    educational_programs: {
        name_program: string,
        duration?: {
            heraka: string,
            arka: string
        } | string,
        name_of_profession?: {
            name: string,
            rent: number
        }[],
        director?: {
            name: string,
            surname: string,
            email: string,
        },
        hosq?: {
            hosq_name: string,
            subjects: string[]
        }[],
        professions?:{
            profession_name:string,
            duration:string
        }[]
    }[],
    ambions:{
        nameAmbion:string,
        directorAmbion:{
            name:string,
            surname:string,
            email:string
        }
    }[]
} = {
    adress: "Mher Mkrtchyan 2",
    email: "gyumri@polytechnic.am",
    phone_number: 37431243528,
    educational_programs: [
        {
            name_program: "Բակալավրիատ",
            duration: {
                heraka: "5 year",
                arka: "4 year"
            }
        },
        {
            name_program: "Մագիստրատուրա",
            duration: {
                heraka: "2.5 year",
                arka: "2 year"
            }
        },
        {
            name_program: "Հեռակա ուսուցում",
            name_of_profession: [
                {
                    name: "Տնտեսագիտություն",
                    rent: 321600
                },
                {
                    name: "Տեղեկատվական Տեխնոլոգիաներ",
                    rent: 360000
                },
                {
                    name: "Շինարարական ճարտարագիտություն",
                    rent: 321600
                },
            ]
        },
        {
            name_program: "Ավագ դպրոց",
            duration: "3 year",
            director: {
                name: "Shushik",
                surname: "Vardanyan",
                email: "shushik.vardanyan@mail.ru",
            },
            hosq: [
                {
                    hosq_name: "ֆիզմաթ",
                    subjects: ["Տեղեկատվական տեխնոլոգիաներ", "Հեռահաղորդակցություն", "Միկրոէլեկտրոնիկա", "Ծրագրավորում",]
                },
                {
                    hosq_name: "դիզայն",
                    subjects: ["Գծանկար", "Կոմպոզիցիա", "Գունանկար", "Գծագրություն"]
                },
                {
                    hosq_name: "ինժեներական",
                    subjects: ["Մաթեմատիկա","Ֆիզիկա","Ճարտարագիտական գրաֆիկա","Ռոբոտաշինություն",]
                }
            ]
        },
        {
            name_program:"Քոլեջ",
            professions:[
                {
                    profession_name:"Համակարգչային գեղարվեստական նախագծում",
                    duration:"3 year"
                },
                {
                    profession_name:"Հաշվողական տեխնիկայի և ավտոմատացված համակարգերի ծրագրային ապահովում",
                    duration:"4 year"
                }
            ]
        }

    ],
    ambions:[
        {
           nameAmbion:"Ինժեներական մասնագիտություններ",
           directorAmbion:{
            name: "Hayastan",
            surname: "Chaxalyan",
            email: "chaxalyan84@list.ru"
           } 
        },
        {
            nameAmbion:"Հումանիտար առարկաներ և տնտեսագիտություն",
            directorAmbion:{
                name: "Anahit",
                surname: "Abrahamyan",
                email: "ano.abrahamyan@mail.ru",
            } 
         },
         {
            nameAmbion:"Կիրառական մաթեմատիկա և տեղեկատվական տեխնոլոգիաններ",
            directorAmbion:{
                name: "Ruzanna",
                surname: "Khachatryan",
                email: "khachatryanruzanna017@gmail.com",
            } 
         }
    ]
}

