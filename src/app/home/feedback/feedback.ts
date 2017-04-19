export class Feedback {
  constructor(
    public username: string,
    public email: string,
    public rate?: number,
    public whatLooking?: string,
    public whatLike?: string,
    public whatHate?: string
  ) {}
}
