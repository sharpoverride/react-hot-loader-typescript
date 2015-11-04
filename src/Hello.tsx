import * as React from 'react';
import * as Rx from 'rx';
import * as RxDom from 'rx-dom';

const dom = RxDom.DOM;
interface HelloProps {
    value: any;
}
export default class Hello extends React.Component<HelloProps, {}> {
    compositeDisposable:Rx.CompositeDisposable;

    constructor() {
        super();
        this.compositeDisposable = new Rx.CompositeDisposable();
    }

    componentWillMount() {
        const trackMouseMove = dom.mousemove(document).subscribe((event) => {
            console.log('mouse move');
        });

        this.compositeDisposable.add(trackMouseMove);
    }

    componentWillUnmount() {
        this.compositeDisposable.dispose();
    }

    render() {
        const {props} = this;
        return (<h1>{props.value.get('text')}</h1>);
    }
}