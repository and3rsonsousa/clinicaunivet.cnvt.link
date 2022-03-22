import { AppDataType } from "~/types";

export function getAppData() {
	let AppDataType: AppDataType = {
		// name  			=>	nome que ficará no <title></title>
		// className 	=>	classes aplicadas ao compomponent <App></App>
		app: {
			name: "Clínica Univet",
			className:
				"font-light text-gray-700/75 antialiased bg-gradient-to-br from-brand-1 to-brand-2",
		},
		// container: { className: "" },
		// Ordem de aparição
		// LOGO | NOME | EXCERT
		header: {
			logo: {
				url: "/logo.svg",
				component: undefined,
				className: "w-52 mx-auto",
			},
			name: {
				title: "Horários de Atendimento",
				className: "text-2xl text-gray-800",
			},
			//texto que fica logo abaixo ao logo
			excerpt: `<strong>SEG A SEX</strong>: 8h às 18h <br> <strong>SÁB</strong>: 8h às 14h`,
			// css class for the whole header,
			// className: "",
		},
		// backdrop: {
		// className: "bg-black/20",
		// url: {
		// path: "/backdrop.svg",
		// className: "-mr-32 -mt-56 text-brand-3 -ml-96",
		// className: "opacity-25 scale-150 mt-16 md:scale-125 md:-mt-32 xl:-mt-96",
		// },
		// },
		links: [
			{
				name: "Marcar Consulta",
				url: "marcar-consulta",
				primary: true,
				redirect:
					"https://api.whatsapp.com/send/?phone=5588997841538&text=Quero+agendar+uma+consulta+para+o+meu+filho+de+patas.&app_absent=0",
			},
			{
				name: "Agendar Banho",
				url: "agendar-banho",
				redirect:
					"https://api.whatsapp.com/send/?phone=5588997841538&text&app_absent=0",
			},
			{
				name: "Ligue para nós",
				url: "ligue-para-nos",
				redirect: "tel:88997841538",
			},
			{
				name: "Como chegar",
				url: "https://g.page/r/CXxRlZ5MzEYIEAE",
			},
			{
				icon: "tiktok",
				url: "https://tiktok.com/@clinicaunivetsobral",
				footer: true,
			},
			{
				icon: "whatsapp",
				url: "https://api.whatsapp.com/send/?phone=5588997841538&text&app_absent=0",
				footer: true,
			},
			{
				icon: "instagram",
				url: "https://instagram.com/clinicaunivetsobral",
				footer: true,
			},
			{
				icon: "facebook",
				url: "https://facebook.com/clinicaunivetsobral",
				footer: true,
			},
		],

		// pages: [
		// 	{
		// 		name: "WhatsApp",
		// 		redirect: "https://api.whatsapp.com/send/?phone=5588997841538&text&app_absent=0",
		// 		url: "whatsapp",
		// 	},
		// 	{
		// 		name: "WhatsApp da Assistência Técnica",
		// 		redirect: "https://api.whatsapp.com/send/?phone=5588997841538&text&app_absent=0",
		// 		url: "whatsapp-assistencia",
		// 	},
		// 	{
		// 		name: "Onde Estamos / Mapa",
		// 		redirect: "https://goo.gl/maps/6nM3J4nL4zbpJcmr7",
		// 		url: "onde-estamos",
		// 	},
		// 	{
		// 		name: "Siga nosso Instagram",
		// 		redirect: "https://instagram.com/newbyteoficial",
		// 		url: "instagram",
		// 	},
		// 	{
		// 		name: "Curta nosso Facebook",
		// 		redirect: "https://facebook.com/newbyteoficial",
		// 		url: "facebook",
		// 	},
		// 	{
		// 		name: "Siga nosso TikTok",
		// 		redirect: "https://tiktok.com/@newbyteoficial",
		// 		url: "tiktok",
		// 	},
		// ],
	};

	return AppDataType;
}
