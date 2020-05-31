import React, {useState} from 'react';
// Custom Hook 
import { useFetch } from '../../hooks/useFetch';
import { useCustomFetch } from '../../hooks/url';


const Feed = () => {
  const [test, setTest] = useState(null);
  const [profile, setProfile] = useState(null);

   const { response, isLoading, error } = useFetch({ 
      url: 'https://my-json-server.typicode.com/typicode/demo/db', 
      method : 'get' 
    });

    const [{ responseData, isLoadingData, errorData }, doFetch] = useCustomFetch();


  const _test = (e)=> {
    if(e.target.value == 'profile'){
      setTest(null)
      return setProfile(response.profile.name)

    }
    setTest(response[e.target.value])
  }

  const _onSubmit = (e) =>{
    e.preventDefault();
    doFetch({
      method: 'post',
      data: {
        user:{
          email: 'email@gmail',
          password: '123456'
        }
      }
    })

  }
  const post = response && Object.keys(response).map(name => <input defaultValue={name} key={name} onClick={_test} />);

  const postJSX = 
  <>
    <ul>  { test 
      ? test.map((a, i) => <li key={i}> {a.body || a.title || a.name}</li>)  
      : <li key ={profile}> {profile}</li>}  
    </ul> 
  </>

    return (
        <div>
        { error && <> error</>}
        { isLoading && <> isLoading</>}
        
        { !error && !isLoading && 
            <>{post}{postJSX }</>
        }

        <form onSubmit={_onSubmit}>
          <button>Submit some data</button>
        </form>
      </div>
    )
  }
  export default Feed;