import { UniqueEntityID } from "./unique-entity-id";

export class Entity<T> {
  private _id: UniqueEntityID;
  protected props: T;

  get id() {
    return this._id;
  }

  constructor(props: T, id?: string) {
    this.props = props;
    this._id = new UniqueEntityID(id);
  }
}
