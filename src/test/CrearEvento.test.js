import React from 'react'
import { mount } from 'enzyme'
import CrearEvento from '../componentes/CrearEvento'

const add = (x,y) => x+y

test("Ejemplo de suma", () => {
    expect(add(2,3)).toBe(5)
});

test('Test basico de un componente', () => {
    const wrapper = mount(<CrearEvento />)
    //console.log(wrapper.debug())
    const nameInput = wrapper.find('[data-test="name-event"]')
    nameInput.simulate('change', { target: { value: 'Motos en santa elena' } })
    expect(wrapper.state('nombre')).toBe('Motos en santa elena')

    
})