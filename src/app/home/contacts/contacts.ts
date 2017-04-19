export class Contacts {
  constructor(
    public email: string,
    public username: string,
    public phone: string,
    public message: string,
    public category?: string,
    public city?: string,
    public country?: string
  ) {}
}
