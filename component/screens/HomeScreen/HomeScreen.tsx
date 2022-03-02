  import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Alert, } from 'react-native'
  import React, { useEffect, useState } from 'react'
  import { BASEURL, endPoint, HEADER } from '../../services/Services'
  // import { Picker } from '@react-native-picker/picker';
  import SelectDropdown from 'react-native-select-dropdown'
  // import { FlatList } from ''
  const HomeScreen = (props: any) => {
    const[Main,setMain]=useState([])
    const [Data, setData] = useState([])
    const[lett,setlett] = useState<any>([])

    console.log(lett, "this is latest Array");
    
// This is main catgory
    async function fetchJSONAsync(): Promise<void> {
      const url = BASEURL + endPoint.MainCategory
      let response = await fetch(url, {
        //This is latest change of my code
        method: 'GET',
        headers: HEADER,
      });
      const json = await response.json();
      setData(json.categories)
    }
    //  Sub Category Function
    async function sub_category(x:any) {
      // console.log(x, 'this is parameter')
      const url = BASEURL + endPoint.GetSubcategroybyparentId+x+'/parent'
      let response = await fetch(url, {
        method: 'GET',
        headers: HEADER,
      });
      const json = await response.json();
      setMain(json.subcategory)
    }
    async function GetProductCategory(gett:any) {
      // console.log(gett, "Next Point")
      let  url = BASEURL + endPoint.ThisDemo +1+'/category/' + gett;
      console.log(url,"THis is URL")
      let response = await fetch(url, {
        method: 'GET',
        headers: HEADER,
      });
      const json = await response.json();
      setlett(json.products)
      console.log(json.products,'////////////')
    }
    useEffect(() => {
      fetchJSONAsync();
    }, [])
    return (
      <View>
      <SelectDropdown
      defaultButtonText={'Select Catgory'}
        data={Data}
        onSelect={(item, index) => {
          // props.navigation.navigate(maii)
          // helll();
          let x = item.id;
          sub_category(x)
          console.log(x, "You have Selected the category")
        }}
        buttonTextAfterSelection={(item, index) => {
          // This is Update picture branch code
          return item.category_name // shows the data after selecting the options
        }}
        rowTextForSelection={(item, index) => {
          return item.category_name //shows the data in drop down
        }}
      />

      {/* This is Sub-category Dropdown */}
     
     
      <SelectDropdown
        data={Main}
        defaultButtonText={'Sub Category'}
        onSelect={(selectedItem, index) => {
          let gett = selectedItem.id
          console.log(gett, "Let see what happend")
          // Alert.alert('You have Entered : => :  ', selectedItem.category_name)
          GetProductCategory(gett);
        }}
        buttonTextAfterSelection={(sitem, index) => {
          return sitem.category_name // selected item
        }}
        rowTextForSelection={(item, index) => {
          if(item.category_name){
              return item.category_name
        }
        else{
          <Text>Nothing To show here</Text> 
        }
      }}
      />



                <View>
                  <FlatList
                  data={lett}
                  renderItem={(valuee)=>{
                    console.log(valuee, "kjdfwjfiu43wqi94803285043804328093285094385034")
                   return(
                     <View style={{marginTop:30,backgroundColor:'red'}}>
                       {/* <Text>{valuee.item.product_attribute[0].attribute_name}</Text> */}
                       <Text style={{color:'red'}}>{valuee.category_name}</Text>
                    </View>
                   )}
                    }
                  />
                </View>

                {/* <Text style={{fontSize:100}}>{valuee.item.manufacturer_name}</Text> */}

     </View>
    )
  }
  export default HomeScreen

  const styles = StyleSheet.create({
    upperHeader: {
      paddingVertical: 30,
      backgroundColor: '#555',
    },
    box:{
      backgroundColor:'#f9f9f9',
      shadowColor:'#000000',
      shadowOpacity:1,
      width:'50%',
      height:'30%',
    }
  })






















































   {/* <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => props.navigation.navigate('CreateProject')}>
            <Image source={require('../../../assets/images/add.png')} style={{ width: 50, height: 50, marginVertical: 40, marginLeft: 40 }} />
          </TouchableOpacity>
          <Text style={{ marginVertical: 50, marginLeft: 20 }}>Lägg till projekt</Text>
        </View>
        <View style={{ padding: 20 }}>

          <FlatList
            data={Data}
            // keyExtractor= {{}}
            renderItem={({ item }) => (
              <View style={{ width: '100%', flexDirection: 'row', marginVertical: 15 }}>
                <View style={{ width: '75%' }}>
                  <TouchableOpacity onPress={() => Alert.alert('This is Project Name')}>
                    <Text>{item.project_name}</Text>
                  </TouchableOpacity>
                </View>
                <View style={{ width: '15%' }}>
                  <TouchableOpacity onPress={() => Alert.alert('This is Edit Icons')}>
                    <Image source={require('../../../assets/images/pencil.png')} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                </View>
                <View style={{ width: '10%' }}>
                  <TouchableOpacity onPress={() => Alert.alert('This is Delete Button')}>
                    <Image source={require('../../../assets/images/trash.png')} style={{ width: 20, height: 20 }} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />

        </View> */}


  // const [Data, setData] = useState([])
    // console.log(Data, "This is Data");

    // async function fetchJSONAsync() {
      
    //   const url = BASEURL + endPoint.GetProject
    //   let response = await fetch(url, {
    //     method: 'GET',
    //     headers: HEADER,
    //   });
    //   const json = await response.json();
    //   setData(json);
    //   console.log(json, 'khdskfjkwje')
    // }
    // // Get all the data from the user
    // useEffect(() => {
    //   fetchJSONAsync();
    // }, [])