import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledAnimation = styled.span`
  position: relative;

  .count {
    display: block;
    position: relative;
    transition: transform 0.4s;
    backface-visibility: hidden;
  }

  .count-enter {
    transform: scale(4) rotateX(0.5turn);
  }

  .count-enter-active {
    transform: rotateX(0);
  }

  .count-exit {
    position: absolute;
    top: 0;
    left: 0;
    transform: rotateX(0);
  }

  .count-exit-active {
    transform: scale(2) rotateX(0);
  }
`;

const StyledDot = styled.div`
  background: var(--green);
  color: white;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 3rem;
  height: 3rem;

  font-size: 1.4rem;
  font-weight: 600;

  font-feature-settings: 'tnum';
  font-variant-numeric: tabular-nums;
`;


const CartCount = ({ count }) => (
  <StyledAnimation>
    <TransitionGroup component={null}>
      <CSSTransition
        unmountOnExit
        classNames='count'
        key={count}
        timeout={{ enter: 400, exit: 400 }}
      >
        <StyledDot>{count}</StyledDot>
      </CSSTransition>
    </TransitionGroup>
  </StyledAnimation>
);

export { CartCount };
