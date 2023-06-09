import { defineStore } from 'pinia'

export const candidateStore = defineStore(
    'candidate',
    {
        state: () => (
            {
                count: -1,
                Candidate: {
                    name: '',
                    age: '',
                    party: '',
                    numvotes: 0,
                    id: 0,
                },
                candidates: [],
                candidateslength: ''
            }
        ),
        // persist: true,
        getters: {
            // doubleCount: (state) => state.count * 2,
            retCandidate: state => {
                // Return an array of item IDs
                return state.candidates.map(item => item.id)
            },
        },
        actions: {
            increment() {
                this.count++
            },
            addCandidate(payload) {
                this.count++
                this.Candidate.name = payload.name;
                this.Candidate.age = payload.age;
                this.Candidate.party = payload.party;
                this.Candidate.id = this.count
            },
            pushCandidate(payload) {
                this.candidates.push(payload)
            },
            returnCandidate() {
                return this.candidates
            }
        },
    })