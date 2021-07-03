import { FilterType } from '../../redux/usersReducer'
import React from 'react'
import { Field, Form, Formik } from 'formik'
import { useSelector } from 'react-redux'
import { getUsersFilter } from '../../redux/usersSelectors'

const userSearchFormValidate = () => {
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
  const filter = useSelector(getUsersFilter)
  return (
    <div>
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friend: filter.friend }}
        validate={userSearchFormValidate}
        onSubmit={submit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Find
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}
