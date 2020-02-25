import { WebPartContext } from '@microsoft/sp-webpart-base'
export interface IHelloWorldProps {
  description: string;
  test: string;
  context: WebPartContext;
}
