import { createContext } from "react";

const userContext = createContext({
    user:'default user',
    datas:'yes'
}
)

export default userContext;