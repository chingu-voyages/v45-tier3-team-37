export interface IBookPreview {
	id?: string;
	title?: string;
	imageLinks?: string;
	author?: string[];
	publisher?: string;
    description?: string;
	identifier?: string;
	date?: string;
}

export interface IPrice {
	seller: string;
	currency: string;
    price: number;
	rating: number;
	ratingsCount: string;
	buyLink: string;
}

export interface NoInfo extends IBookPreview{
  noInfo: boolean;
}