import {FilterType} from '../../redux/usersReducer'
import React from 'react'
import {Field, Form, Formik} from 'formik'

const userSearchFormValidate = (values: any) => {
  return {}
}
type Prop = {
  onFilterChanged: (filter: FilterType) => void
}
export const UsersSearchForm: React.FC<Prop> = ({ onFilterChanged }) => {
  const submit = (
    values: FilterType,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    onFilterChanged(values)
    setSubmitting(false)
  }
  return (
    <div>
      <Formik
        initialValues={{ term: '', friend: null }}
        validate={userSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
          </Form>
        )}
      </Formik>
    </div>
  )
}
