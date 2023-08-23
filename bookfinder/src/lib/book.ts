export interface IBookPreview {
	id: string;
	title: string;
	image: string;
	author: string;
	publisher: string;
	/* year: string; */
    description: string;
}

export interface IBook extends IBookPreview{
    currency: string; //not sure if it must be here
    price: string;
}