
import { useEffect } from react;


const ProjectD = () => {

    const [projects, setProjects] = useState(null);
    
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    useEffect(() => {

        const fetchProjects = async () => {

            try {

                const response = await.axios.get("http://localhost:5000/api/projects");
                setProjects(response.data)


                
            } catch (error) {
                setError(error.response ? error.response.data : error.message);
                
            } finally {
                setLoading(false);
            }
        }

        fetchProjects();
            
        }


     , []);


    
}

