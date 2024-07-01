export default interface Shoutout {
  _id?: string;
  to: string;
  from: string;
  text: string;
  userPhoto?: string;
  shoutoutImage?: string;
}
