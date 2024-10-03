import { Box, Button, DateTimePicker, Flex, Modal } from '@strapi/design-system';
import { useIntl } from 'react-intl';

import { Formik, Form } from 'formik';
import React, { FC } from 'react';
/*
interface BulkActionDescription {
  dialog?: DialogOptions | NotificationOptions | ModalOptions;
  disabled?: boolean;
  icon?: React.ReactNode;
  label: string;
  onClick?: (event: React.SyntheticEvent) => void;
  type?: 'icon' | 'default';
  variant?: 'default' | 'secondary' | 'tertiary' | 'danger-light' | 'success';
}
*/

export const BulkEditButton = ({ ids, model }: {ids: any[], model: any}) => {
  const { formatMessage } = useIntl();
  const handleSubmit = (values: any) => {
    console.log('do bulk edit', ids, '----', model);
    return null;
  }

  const onExpiredAtChange = (data: any) => {
    console.log('onExpiredAtChange data', data);
  }

  const onExpiredAtClear = (e: any) => {
    console.log('onExpiredAtChange e', e);
  }
  const onGeoLocationChange = (e: any) => {
    console.log('onGeoLocationChange e', e);
  }
  if (model === 'api::hello.hello') {
    return {
      label: formatMessage({ id: 'global.bulk-edit', defaultMessage: 'Bulk Edit' }),
      // onClick: () => {
      //   onBulkEdit();
      // },
      variant: 'tertiary',
      dialog: {
        type: 'modal',
        title: formatMessage({
          id: 'content-manager-list-view.bulk-edit',
          defaultMessage: 'Bulk Edit Content',
        }),
        content: ({ onClose }: {onClose: Function}) => {
          return (
            <Formik
              onSubmit={async (values) => {
                const data = await handleSubmit(values);
                if (data) {
                  return onClose();
                }
              }}
              validationSchema={null}
              initialValues={{}}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Modal.Body>
                    <Flex direction="column" alignItems="stretch" gap={2}>
                      <Box paddingBottom={6}>
                        <DateTimePicker
                          name="expiredAt"
                          onChange={onExpiredAtChange}
                          onClear={onExpiredAtClear}
                          initialDate={new Date('1994-12-18T15:00:00.000Z')}
                        />
                      </Box>
                      <Box paddingBottom={6}>
                      
                      </Box>
                    </Flex>
                  </Modal.Body>
                  <Modal.Footer>
                    <Modal.Close>
                      <Button variant="tertiary">Cancel</Button>
                    </Modal.Close>
                    <Button>Confirm</Button>
                  </Modal.Footer>
                </Form>
              )}
            </Formik>
          );
        },
      },
      id: 'content-bulk-edit-modal'
    }
  }
  return null;
}

