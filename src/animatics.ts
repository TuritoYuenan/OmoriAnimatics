export interface Animatic {
	yt_id: string;
	date: string;
	title: string;
	channel: string;
}

export function mostRecent(a: Animatic, b: Animatic) {
	if (a.date > b.date) {
		return 1;
	} else if (a.date < b.date) {
		return -1;
	} return 0;
}

export const animatics: Animatic[] = [
	{
		"yt_id": "ceU9nuyUxhQ",
		"date": "2023-03-24",
		"channel": "Araara",
		"title": "Omori (SPOILERS) I gotta tell you something!!"
	},
	{
		"yt_id": "BpZjGsgbIAw",
		"date": "2023-02-10",
		"channel": "Araara",
		"title": "Omori Just cheer up Basil!"
	},
	{
		"yt_id": "prbHnnSf7qc",
		"date": "2023-01-31",
		"channel": "Araara",
		"title": "Omori Smile for us Sunny!"
	},
	{
		"yt_id": "YwcFlM-W1Cw",
		"date": "2023-01-09",
		"channel": "Araara",
		"title": "Omori Sayonara stranger after Hero's \u201cApology\u201d"
	},
	{
		"yt_id": "47IhDtsMxU8",
		"date": "2022-12-21",
		"channel": "Araara",
		"title": "Omori Do not the Mewo"
	},
	{
		"yt_id": "zM3rGBQ07XU",
		"date": "2022-12-04",
		"channel": "Araara",
		"title": "(omori) SPOILERS omori fight but Kel plays Bad Apple"
	},
	{
		"yt_id": "jD7H0Wg-w_k",
		"date": "2022-09-19",
		"channel": "Araara",
		"title": "Ligma (Omori)"
	},
	{
		"yt_id": "FNKI20PlFBo",
		"date": "2022-09-16",
		"channel": "Araara",
		"title": "Sunny's forgetting something (omori)"
	},
	{
		"yt_id": "0V0luleZYE4",
		"date": "2022-09-10",
		"channel": "Araara",
		"title": "Why does Dark have no \u201cC\u201d? (Omori)"
	},
	{
		"yt_id": "ifsXhI6Ti1o",
		"date": "2022-09-10",
		"channel": "Araara",
		"title": "Rice cooker (Omori)"
	},
	{
		"yt_id": "UEvA2WikMiA",
		"date": "2022-09-10",
		"channel": "Araara",
		"title": "Let the Emo within out, Sunny (Omori)"
	},
	{
		"yt_id": "XmzXCKRPo-k",
		"date": "2022-09-10",
		"channel": "Araara",
		"title": "Hero, Kel and Sally Outing! (Omori)"
	},
	{
		"yt_id": "Tr2615BMzKA",
		"date": "2022-09-09",
		"channel": "Araara",
		"title": "Roommates being sick (Omori)"
	},
	{
		"yt_id": "Bj9xLVNrc2Y",
		"date": "2022-09-08",
		"channel": "Araara",
		"title": "Who drank my orange joe? (Omori)"
	},
	{
		"yt_id": "p9FQuBoKm-g",
		"date": "2021-06-29",
		"channel": "Box_enjoyer",
		"title": "Wrong Number | OMORI animatic"
	},
	{
		"yt_id": "2fKGa_zFoU0",
		"date": "2022-08-10",
		"channel": "Dreamu Ani",
		"title": "WHAT'S THE NAME OF THE NATIONAL TREE OF THE PHILIPPINES? | OMORI (Animatic)"
	},
	{
		"yt_id": "lfDMCos8hxY",
		"date": "2021-05-11",
		"channel": "Ghostie Bee",
		"title": "The Hole (OMORI animatic)"
	},
	{
		"yt_id": "Wo-eJo-396w",
		"date": "2021-04-29",
		"channel": "Ghostie Bee",
		"title": "OMORI as vines (BIG SPOILERS)"
	},
	{
		"yt_id": "ZpKFLuTUs0o",
		"date": "2022-12-22",
		"channel": "Gobadet",
		"title": "[ OMORI ] Sunny's Weird Neighbors"
	},
	{
		"yt_id": "glvAZPOuwcw",
		"date": "2023-02-11",
		"channel": "Mishii Jeda",
		"title": "don't forget \u2014 omori animatic"
	},
	{
		"yt_id": "13KqeSednTw",
		"date": "2021-06-19",
		"channel": "crow.mp4",
		"title": "Salt and Pepper Diner | OMORI animatic"
	},
	{
		"yt_id": "sxZO5raUmaw",
		"date": "2021-02-10",
		"channel": "dedtective",
		"title": "sunny doesn't notice anything"
	},
	{
		"yt_id": "OHiVuLz4XYM",
		"date": "2022-10-21",
		"channel": "melanchoise",
		"title": "salt | omori animatic"
	}
]
