declare module '@nestjs/common' {
  // Workaround for missing decorator type definitions in the installed package.
  export function Module(metadata: any): ClassDecorator;
  export function Controller(prefix?: string | string[]): ClassDecorator;
  export function Injectable(): ClassDecorator;
  export function Global(): ClassDecorator;
  export function Get(path?: string | string[]): MethodDecorator;
  export function Post(path?: string | string[]): MethodDecorator;
  export function Body(): ParameterDecorator;
  export function Param(param?: string): ParameterDecorator;
  export function Query(param?: string): ParameterDecorator;

  export interface OnModuleInit {
    onModuleInit(): any;
  }
  export interface OnModuleDestroy {
    onModuleDestroy(): any;
  }
}
