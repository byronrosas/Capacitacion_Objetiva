import React from 'react';

export default class Input_Modificar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let data = this.props.data;
        const nombre = data[0];
        const area = data[0];
        const destreza = data[0];
        const observacion = data[0];
        return (
            <div className='row'>
                <div className='col m2 l2'></div>
                <div className='col s12 m8 l8'>
                    <div className='row'>
                        </div>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className='col m2 l2'></div>
            </div>
        );
    }
}
