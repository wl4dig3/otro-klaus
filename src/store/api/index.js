
export default {
    
    state: {
        indicador: [],
        indicadorFiltrado: []

    },
    getters: {

    },
    mutations: {
        setIndicador(state,payload){
            state.indicador= payload
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
                //  let indicadores = [],
                 data.data.forEach(e => {
                     console.log('Mostrando resultado del llamado a la api',e.data);
                     indicador.push(e.data)
                     
                 });
             } catch (error) {
                 console.log('error del catch',error);
             }
        }
    },
    namespaced: true,
};