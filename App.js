import React from 'react';
import {View, Text} from 'react-native';

// ex 1
//const Welcome = () => {
//    return <Text>Welcome To C346 - Mobile App Dev</Text>
//}

// ex 2
// class ModuleInfo extends React.Component {
//     render() {
//         return (
//             <View>
//                 <Text>These are my modules this semester.</Text>
//             </View>
//         )
//     }
// }

// ex 3
const Welcome = ({code, name}) => {
    return <Text>{`Welcome to ${code} - ${name}`}</Text>
}

class ModuleInfo extends React.Component {
    render() {
        return (
            <View>
                <Text>These are my modules for the semester</Text>
                <Welcome code="C346" name="Mobile App Dev"/>
                <Welcome code="C105" name="Introduction to Programming"/>
                <Welcome code="C337" name="Immersive Technologies"/>
            </View>
        )
    }
}

export default ModuleInfo;