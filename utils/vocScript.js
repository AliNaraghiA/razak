 
import gql from 'graphql-tag'
export default {
  data() {
    return {
      name: '',
      email: '',
      shape: '',
      text: '',
      Phone: '',
      model: '',
      fname: '',
      first: '',
    }
  },
  methods: {
    async handleSubmit() {
      const SUBMIT_FORM_MUTATION = gql`
mutation SubmitFormvoc ($fname:String,$shape:String,$model:String,$first:String,$text:String,$Phone:String,$name: String , $email: String!,) {
  submitGfForm(input: {
   fieldValues: [
          {
        id:9, 
        value:  $shape 
      },
          {
        id:10, 
        value:  $name 
      },
          {
        id:13, 
        value:  $text 
      },
          {
        id:6, 
         value:$Phone
      },
          {
        id:7, 
        value:  $model 
      },
          {
        id:8, 
        value:  $fname 
      },
      {
        id:14, 
        value:  $first 
      },
      {
        id:2,
        emailValues: {
          value:  $email 
        },
 
      }
    ],
    id: "2"
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
            email: this.email,
            shape: this.shape,
            model: this.model,
            first: this.first,
            text: this.text,
            Phone: this.Phone,
            fname: this.fname,
           }
        });
        // Handle the response data
      } catch (error) {
        // Handle errors
      }
    }
  }
}
