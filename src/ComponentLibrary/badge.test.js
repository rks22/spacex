import React from 'react';
import { shallow } from 'enzyme';
import { Badge } from './Bagde.jsx';

it('should not break without any props', () => {
    shallow(<Badge/>); 
});