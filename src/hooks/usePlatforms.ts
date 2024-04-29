import { useEffect, useState } from "react";
import { Platform } from "./useGame";
import apiClient from "../services/apiClient";
import useData from "./useData";
    
const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;
