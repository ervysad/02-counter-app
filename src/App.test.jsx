import { render } from "@testing-library/react";
import App from "./App";


describe('Pruebas en el componente titulo App.jsx', () => {

  test('Debe ser igual al snapshot definido', () => {

    const { container } = render( < App proping="testing"/> )
    expect( container ).toMatchSnapshot();
});
});