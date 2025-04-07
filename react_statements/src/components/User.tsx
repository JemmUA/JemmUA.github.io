import {usersData} from "../usersData.ts";
import {useState} from "react";

export default function Users () {
    const [users, setUsers] = useState(usersData);
}