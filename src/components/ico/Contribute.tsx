// tslint:disable no-null-keyword no-any
import { Button, FromStream } from '@neo-one/react';
import BigNumber from 'bignumber.js';
import * as React from 'react';
import { Base, Flex, Input, styled } from 'reakit';
import { concat, defer, of } from 'rxjs';
import { prop } from 'styled-tools';
import { WithContracts } from '../../../one/generated';
import { ICOContainer } from '../../containers';
import { Body2 } from '../../elements';
import { ComponentProps } from '../../types';

const StyledFlex = styled(Flex)`
  max-width: 519px;
  padding: 8px 0;
`;

const StyledInput = styled(Input)`
  margin-right: 8px;
  width: 400px;
`;

const StyledBody2 = styled(Body2)`
  ${prop('theme.fonts.axiformaBold')};
  margin-right: 8px;
  white-space: nowrap;
`;

const Wrapper = styled(Base)`
  display: inline-block;
`;

export const Contribute = (props: ComponentProps<typeof Flex>) => (
  <ICOContainer>
    {({ text, amount, loading, onChangeAmount, send }) => (
      <Wrapper>
        <StyledFlex {...props}>
          <StyledInput
            value={text}
            placeholder="Send NEO"
            onChange={(event: React.SyntheticEvent<any>) => onChangeAmount(event.currentTarget.value)}
          />
          <WithContracts>
            {({ ico }) => (
              <FromStream props$={concat(of(new BigNumber(10)), defer(async () => ico.amountPerNEO()))}>
                {(amountPerNEO) => (
                  <StyledBody2>
                    = {amount === undefined ? '0' : `${amountPerNEO.times(amount).toFormat()}`} ONE
                  </StyledBody2>
                )}
              </FromStream>
            )}
          </WithContracts>
        </StyledFlex>
        <Flex justifyContent="flex-end">
          <Button disabled={amount === undefined || loading} onClick={send}>
            Send
          </Button>
        </Flex>
      </Wrapper>
    )}
  </ICOContainer>
);
