import axios from 'axios';
import React,{ useState, useEffect} from react;
import { kMaxLength } from 'buffer';
const cpeList = () =>
{
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        fetch('/api/cpes').then(response=>response.json()).then(data=>setUsers(data))
        .catch(error=>console.error('Error fetching cpes:',error));

    },[]);
        return(
            <div>
                {users.map(user=>(
                    <div key={user.id}>{user.name}</div>
                ))}
            </div>
        );
};

export default cpeList;

