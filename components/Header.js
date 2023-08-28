import * as React from 'react';
import { Appbar } from 'react-native-paper';

const Header = (props) => {
    return(
        <Appbar.Header>
            {props.showHeader && <Appbar.BackAction onPress={() => props.return.goBack()} />}
            <Appbar.Content title={props.title} />
        </Appbar.Header>
    )
};

export default Header;