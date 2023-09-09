import React, { useEffect, useState } from 'react'
import axios from 'axios'
/*I used papaparse to parse the csv data to an object
 and added the meteorite csv file to the public folder to call it with (process)
 */
import papa from 'papaparse'

type NasaContextProviderPropsType = {
  children: React.ReactNode
}
type NasaDataType = { NasaData: unknown[] | undefined }
type NeoDataType = { NeoData: unknown[] | undefined }

const NasaContext = React.createContext<NasaDataType & NeoDataType>({
  NasaData: undefined,
  NeoData: undefined,
})
export function NasaContextProvider({
  children,
}: NasaContextProviderPropsType) {
  const [Data, setData] = useState<unknown[]>()
  const [NeoData, setNeoData] = useState<unknown[]>()
  useEffect(() => {
    axios.get(`${process.env.PUBLIC_URL}/Meteorite_Landings.csv`).then(res => {
      papa.parse(res.data, {
        header: true,
        complete: parsedRes => {
          setData(parsedRes.data)
        },
      })
    })
    axios
      .get(`${process.env.PUBLIC_URL}/NEO_Earth_Close_Approaches.csv`)
      .then(res => {
        papa.parse(res.data, {
          header: true,
          complete: parsedRes => {
            setNeoData(parsedRes.data)
          },
        })
      })
  }, [])
  return (
    <NasaContext.Provider value={{ NasaData: Data, NeoData: NeoData }}>
      {children}
    </NasaContext.Provider>
  )
}
