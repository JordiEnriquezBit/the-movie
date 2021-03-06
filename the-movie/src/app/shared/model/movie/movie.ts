export class Movie {
  private _id :Number
  private _title :String;
  private _poster :String;
  private _synopsis :String;
  private _genres :string[];
  private _year :Number;
  private _director :String;
  private _actors :string[];
  private _schedule :string[];
  private _room :Number;

	constructor(id?: Number, title?: String, poster?: String, synopsis?: String, genres?: string[], year?: Number, director?: String, actors?: string[], schedule?: string[], room?: Number) {
		this._id = id;
		this._title = title;
		this._poster = poster;
		this._synopsis = synopsis;
		this._genres = genres;
		this._year = year;
		this._director = director;
		this._actors = actors;
		this._schedule = schedule;
		this._room = room;
	}

  /**
     * Getter title
     * @return {Number}
     */
    public get id(): Number {
      return this._id;
    }

    /**
     * Getter title
     * @return {String}
     */
	public get title(): String {
		return this._title;
	}

    /**
     * Getter poster
     * @return {String}
     */
	public get poster(): String {
		return this._poster;
	}

    /**
     * Getter synopsis
     * @return {String}
     */
	public get synopsis(): String {
		return this._synopsis;
	}

    /**
     * Getter genres
     * @return {string[]}
     */
	public get genres(): string[] {
		return this._genres;
	}

    /**
     * Getter year
     * @return {Number}
     */
	public get year(): Number {
		return this._year;
	}

    /**
     * Getter director
     * @return {String}
     */
	public get director(): String {
		return this._director;
	}

    /**
     * Getter actors
     * @return {string[]}
     */
	public get actors(): string[] {
		return this._actors;
	}

    /**
     * Getter schedule
     * @return {string[]}
     */
	public get schedule(): string[] {
		return this._schedule;
	}

    /**
     * Getter room
     * @return {Number}
     */
	public get room(): Number {
		return this._room;
	}

    /**
     * Setter title
     * @param {Number} value
     */
	public set id(value: Number) {
		this._id = value;
  }

    /**
     * Setter title
     * @param {String} value
     */
	public set title(value: String) {
		this._title = value;
	}

    /**
     * Setter poster
     * @param {String} value
     */
	public set poster(value: String) {
		this._poster = value;
	}

    /**
     * Setter synopsis
     * @param {String} value
     */
	public set synopsis(value: String) {
		this._synopsis = value;
	}

    /**
     * Setter genres
     * @param {string[]} value
     */
	public set genres(value: string[]) {
		this._genres = value;
	}

    /**
     * Setter year
     * @param {Number} value
     */
	public set year(value: Number) {
		this._year = value;
	}

    /**
     * Setter director
     * @param {String} value
     */
	public set director(value: String) {
		this._director = value;
	}

    /**
     * Setter actors
     * @param {string[]} value
     */
	public set actors(value: string[]) {
		this._actors = value;
	}

    /**
     * Setter schedule
     * @param {string[]} value
     */
	public set schedule(value: string[]) {
		this._schedule = value;
	}

    /**
     * Setter room
     * @param {Number} value
     */
	public set room(value: Number) {
		this._room = value;
	}



}
