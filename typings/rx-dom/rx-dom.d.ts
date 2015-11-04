// Type definitions for RxDom vx.x.x
// Project: https://github.com/Reactive-Extensions/RxJS-DOM
// Definitions by:  criss.trifan@gmail.com, sharpoverride@gmail.com
// Definitions: https://github.com/borisyankov/DefinitelyTyped
//<reference path="../rx/rx.d.ts"/>

declare module Rx {
    export module DOM {
        export interface AjaxSettings {
            async?: boolean;
            body?: string;
            // This options does not seem to be used in the code yet
            // contentType?: string;
            crossDomain?: boolean;
            headers?: any;
            method?: string;
            password?: string;
            progressObserver?: Rx.Observer<any>;
            responseType?: string;
            url?: string;
            user?: string;
        }

        export interface AjaxSuccessResponse {
            response: any;
            status: number;
            responseType: string;
            xhr: XMLHttpRequest;
            originalEvent: Event;
        }

        export interface AjaxErrorResponse {
            type: string;
            status: number;
            xhr: XMLHttpRequest;
            originalEvent: Event;
        }

        export interface JsonpSettings {
            async?: boolean;
            jsonp?: string;
            jsonpCallback?: string;
            url?: string;
        }

        export interface JsonpSuccessResponse {
            response: any;
            status: number;
            responseType: string;
            originalEvent: Event;
        }

        export interface JsonpErrorResponse {
            type: string;
            status: number;
            originalEvent: Event;
        }

        export interface GeolocationOptions {
            enableHighAccuracy?: boolean;
            timeout?: number;
            maximumAge?: number;
        }

        // Events
        function fromEvent(element:any, eventName:string, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function ready():Rx.Observable<any>;

        // Event Shortcuts
        function blur(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function change(element:any, selector?:Function):Rx.Observable<any>;

        function click(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function contextmenu(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function dblclick(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function error(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function focus(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function focusin(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function focusout(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function keydown(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function keypress(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function keyup(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function load(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mousedown(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mouseenter(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mouseleave(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mousemove(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mouseout(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mouseover(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function mouseup(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function resize(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function scroll(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function select(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function submit(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function unload(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        // Pointer Events
        function pointerdown(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function pointerenter(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function pointerleave(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function pointermove(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function pointerout(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function pointerover(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function pointerup(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        // Touch Events
        function touchcancel(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function touchend(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function touchmove(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        function touchstart(element:any, selector?:Function, useCapture?:boolean):Rx.Observable<any>;

        // Ajax
        function ajax(url:string):Rx.Observable<AjaxSuccessResponse | AjaxErrorResponse>;
        function ajax(settings:AjaxSettings):Rx.Observable<AjaxSuccessResponse | AjaxErrorResponse>;

        function get(url:string):Rx.Observable<AjaxSuccessResponse | AjaxErrorResponse>;

        function getJSON(url:string):Rx.Observable<any>;

        function post(url:string, body:any):Rx.Observable<AjaxSuccessResponse | AjaxErrorResponse>;

        function jsonpRequest(url:string):Rx.Observable<any>;
        function jsonpRequest(settings:JsonpSettings):Rx.Observable<JsonpSuccessResponse | JsonpErrorResponse>;

        // Server-Sent Events
        function fromEventSource(url:string, openObservable?:Rx.Observer<any>):Rx.Observable<any>;

        // Web Sockets
        function fromWebSocket(url:string, protocol:string, openObserver?:Rx.Observer<any>, closingObserver?:Rx.Observer<any>):Rx.Subject<any>;

        // Web Workers
        function fromWebWorker(url:string):Rx.Subject<any>;

        // Mutation Observers
        function fromMutationObserver(target:Node, options:MutationObserverInit):Rx.Observable<any>;

        // Geolocation
        export module geolocation {
            function getCurrentPosition(geolocationOptions?:GeolocationOptions):Rx.Observable<any>;

            function watchPosition(geolocationOptions?:GeolocationOptions):Rx.Observable<any>;
        }
    }
}

declare module "rx-dom" {
    export = Rx
}
