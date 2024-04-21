 
import gql from 'graphql-tag'
export default {
  data() {
    return {
      name: '',
      email: ''
    }
  },
  methods: {
    async handleSubmit() {
      const SUBMIT_FORM_MUTATION = gql`
        mutation SubmitForm($name: String!, $email: String!) {
          submitGfForm(input: {
            fieldValues: [
              {
                id: 3,
                value: $name
              },
              {
                id: 2,
                emailValues: {
                  value: $email
                }
              }
            ],
            id: "1"
          }) {
            clientMutationId
            entry {
              id
              formId
            }
            errors {
              id
              message
            }
          }
        }
      `;

      try {
        const { data } = await this.$apollo.mutate({
          mutation: SUBMIT_FORM_MUTATION,
          variables: {
            name: this.name,
            email: this.email
          }
        });
        // Handle the response data
      } catch (error) {
        // Handle errors
      }
    }
  }
}
