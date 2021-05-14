
# Store  
Vuex uses a single state tree - that is, this single object contains all your application level state and serves as the "single source of truth.".


## State:  
The data you store in Vuex follows the same rules as the data in a Vue instance, ie the state object must be plain.  


## Getters:  
similarly to the role of "computed" property inside a "vue-component", "getters" is func that return a computed value depending on the state.

## Mutations:  
The only way to actually change state in a Vuex store is by committing a mutation i.e. `store.commit('mutation_func_name')`.  
**mutation handler functions must be synchronous**.  
*You can commit mutations in components or inside the store itself*   Note that you can opt-out of callig a mutation in components by creating an action for each mutation handler.


## Actions:  
Actions are similar to mutations, the differences being that:  
* Instead of mutating the state, actions commit mutations.
* Actions can contain arbitrary asynchronous operations.


