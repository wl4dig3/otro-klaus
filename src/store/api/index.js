
export default {
    
    state: {
        indicador: [],
        indicadorFiltrado: []

    },
    getters: {

    },
    mutations: {
        // la mutacion que modificará el estado y payload es el objeto Fecha
        setIndicador(state,payload){
            state.indicador.push(payload)
        },
        setindicadorFiltrado(state,payload){
            state.indicadorFiltrado = payload
        }
    },
    actions: {
        async getIndicador({commit}){
             try {
                 const resp = await fetch('https://www.feriadosapp.com/api/holidays.json')
                 const data = await resp.json() 
                 console.log('aqui esta la:',data);
                //  Extrayendo los datos
                 data.data.forEach(e => {    // 'e' es el objeto dentro del arreglo
                    //  console.log('Mostrando resultado del llamado a la api', e);
                    let Fecha ={
                        dia: e.date,
                        motivo: e.title
                    };
                    commit('setIndicador', Fecha) // le pasamos a la mutacion setIndicador el objeto de la Fecha
                     
                 });
             } catch (error) {
                 console.log('error del catch',error);
             }
        }
    },
    namespaced: true,
};