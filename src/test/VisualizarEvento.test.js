import React from 'react'
import VisualizarEvento from "../componentes/VisualizarEvento";
import { shallow } from 'enzyme'

const  wait  = () => new Promise((resolve) => setTimeout(resolve, 0))

const eventos = [
    {
        nombre: 'Motos',
        categoria: 'Motos',
        fecha: 'xxxx-xxx',
        hora: 'xxxx-xxx',
        lugar: 'Buenos Aires',
        detalles: 'xxxx',
        cantidad: 20
    },
    {
        nombre: 'Carros',
        categoria: 'Carros',
        fecha: 'xxxx-xxx',
        hora: 'xxxx-xxx',
        lugar: 'Buenos Aires',
        detalles: 'xxxx',
        cantidad: 20
    }
]

test('Visualizar eventos', async () => {
    const wrapper = shallow(<VisualizarEvento />, { disableLifecycleMethods: true })
    const fetch = jest.fn(async () => {
        return {
            json: jest.fn().mockResolvedValue(eventos)
        }
    })

    wrapper.instance().obtain(fetch)
    await wait()
    wrapper.update()
    expect(wrapper.state('eventos')).toEqual(eventos)
    const events = wrapper.find('[data-test="event-row"]')
    expect(events).toHaveLength(2)
})