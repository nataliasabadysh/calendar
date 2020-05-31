

const withStorage = NextedComponent => props => {

    const save = (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (err) {
            throw new Error('Sava data to LS');
        }
    };

    const get = key => {
        try {
            const items = localStorage.getItem(key);
        return items ? JSON.parse(items) : null;
        } catch (err) {
            throw new Error('Get data from LS');
        }
    };

    const remove = key => {
        try{
            localStorage.removeItem(key);
        }catch(error){
            throw new Error('Remove data from LS');
        }
    }

  return <NextedComponent {...props}  getFromStorage={get} saveToStorage={save} removeFromStorage={remove} />
}