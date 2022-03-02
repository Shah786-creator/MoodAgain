import { View, Text, ScrollView, Button, Alert, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import DataCollectionFomrs from '../../atomic/Forms/DataCollectionFomrs'
import { BASEURL, endPoint, HEADER } from '../../services/Services'
import AsyncStorage from '@react-native-async-storage/async-storage'

const CreateProject = () => {


    const [DataCollection, setDataCollection] = useState({
        'customer': '',
        'project_name': '',
    })
    async function OnClickSubmit() {



        let CreateProject = BASEURL + endPoint.GetProject;
        const main = await fetch(CreateProject, {
            method: 'POST',
            headers: HEADER,
            body: JSON.stringify(DataCollection)
        })
        let jjj = await main.json()
        console.log(jjj, "HTis is Main")
    }




    useEffect(
        function async() {
            // const demo = await AsyncStorage.getItem('createdbyID');
            // console.log(demo, "This is demo")
            // OnClickSubmit()
        }, [])
    // 
    return (
        <ScrollView>
            <View>
                <View style={{ padding: 15 }}>
                    <View style={{ marginVertical: 30, marginLeft: 20 }}>
                        <Text style={{ width: 150, fontSize: 18 }}>Fyll i uppgifter Avsluta med spara</Text>
                    </View>
                    {/* Create Projects Forms */}
                    <Text style={{ fontSize: 20, marginBottom: 10 }}>Organisation</Text>
                    <DataCollectionFomrs Placeholder='Kund' onchangetext={(e: string) => setDataCollection({ ...DataCollection, customer: e })} />
                    <DataCollectionFomrs Placeholder='Projektets namn' onchangetext={(e: string) => setDataCollection({ ...DataCollection, project_name: e })} />
                    {/* <Text style={{ fontSize: 20, marginBottom: 20, marginVertical: 10 }}>kontaktperson</Text> */}
                    {/* <DataCollectionFomrs Placeholder='Förnamn Efternamn' />
                    <DataCollectionFomrs Placeholder='e-post' />
                    <DataCollectionFomrs Placeholder='telefon' />
                    <DataCollectionFomrs Placeholder='Yrkesroll' />
                    <DataCollectionFomrs Placeholder='Företag' /> */}
                </View>
                <TouchableOpacity onPress={OnClickSubmit} style={{ alignSelf: 'flex-end', marginRight: 50, margin: 15, padding: 16, borderRadius: 5, borderWidth: 1 }}>
                    <Text style={{ paddingLeft: 10, paddingRight: 10 }}>Sapra</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

export default CreateProject