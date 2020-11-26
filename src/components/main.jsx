import React,{useState} from 'react'
    const Upload=()=>{
        const [name , setName]=useState('')
        const [type , setType]=useState('')
        const upload_pdf= e => {
            setName(e.target.files[0].name)
            setType(e.target.files[0].type)
        
        }
      
        //stop form action 
        const hang= e => {
            e.preventDefault()
            let data=new FormData()
            
        }
        return(
            <>
                <div className="form-group">
                    <form action="" onSubmit={hang}>
                        <input type="file" className='form-control' onChange={upload_pdf}/>
                         
             <h6 className='disc'>{name}</h6>
             <h6 className='disc'>{type}</h6>

             {name==''? <h6 className='drag'>Drag item here to upload</h6> : <button className='btn btn-info' onClick={()=>alert('still under developement needs data to use push notification instead of Alert')}>upload</button>}
                    </form>
                </div>
               
            </>
        )
    }

export default Upload;