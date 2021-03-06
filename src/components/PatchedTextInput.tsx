import { TextInput } from '@neo-one/react-core';
import styled from 'styled-components';
import { theme } from '../theme';

export const PatchedDarkTextInput = styled(TextInput)`
  background-color: ${theme.primaryDark};
  ${theme.fonts.axiformaRegular as any};
  ${theme.fontStyles.subheading as any};
  height: 50px;
`;

export const PatchedTextInput = styled(TextInput)`
  ${theme.fonts.axiformaRegular as any};
  ${theme.fontStyles.subheading as any};
`;
