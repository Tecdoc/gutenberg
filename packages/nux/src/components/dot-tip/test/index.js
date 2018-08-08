/**
 * External dependencies
 */
import { shallow } from 'enzyme';
import { noop } from 'lodash';

/**
 * Internal dependencies
 */
import { DotTip } from '..';

jest.mock( '../../../../../components/src/button' );

describe( 'DotTip', () => {
	it( 'should not render anything if invisible', () => {
		const wrapper = shallow(
			<DotTip onRegister={ noop } onUnregister={ noop }>
				It looks like you’re writing a letter. Would you like help?
			</DotTip>
		);
		expect( wrapper.isEmptyRender() ).toBe( true );
	} );

	it( 'should render correctly', () => {
		const wrapper = shallow(
			<DotTip isVisible onRegister={ noop } onUnregister={ noop }>
				It looks like you’re writing a letter. Would you like help?
			</DotTip>
		);
		expect( wrapper ).toMatchSnapshot();
	} );

	it( 'should call onDismiss when the dismiss button is clicked', () => {
		const onDismiss = jest.fn();
		const wrapper = shallow(
			<DotTip isVisible onDismiss={ onDismiss } onRegister={ noop } onUnregister={ noop }>
				It looks like you’re writing a letter. Would you like help?
			</DotTip>
		);
		wrapper.find( 'Button[children="Got it"]' ).first().simulate( 'click' );
		expect( onDismiss ).toHaveBeenCalled();
	} );

	it( 'should call onDisable when the X button is clicked', () => {
		const onDisable = jest.fn();
		const wrapper = shallow(
			<DotTip isVisible onDisable={ onDisable } onRegister={ noop } onUnregister={ noop }>
				It looks like you’re writing a letter. Would you like help?
			</DotTip>
		);
		wrapper.find( 'IconButton[label="Disable tips"]' ).first().simulate( 'click' );
		expect( onDisable ).toHaveBeenCalled();
	} );
} );
