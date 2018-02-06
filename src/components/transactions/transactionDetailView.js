import React from 'react';
import grid from 'flexboxgrid/dist/flexboxgrid.css';
import { TimeFromTimestamp, DateFromTimestamp } from './../timestamp/index';
import CopyToClipboard from '../copyToClipboard';
import AccountVisual from '../accountVisual';
import styles from './transactions.css';
import { FontIcon } from '../fontIcon';
import LiskAmount from '../liskAmount';
import Amount from './amount';

class TransactionsDetailView extends React.Component {
  showAvatar(address) {
    return address && !this.props.prevStep;
  }

  render() {
    return (
      <div className={`${styles.details}`}>
        {this.props.prevStep &&
        <header>
          <h3>
            <small className={`${styles.backButton}`} onClick={() => { this.props.prevStep(); }} id='transactionDetailsBackButton'>
              <FontIcon className={`${styles.arrow}`} value='arrow-left'/>
              <span className={`${styles.text}`}>{this.props.t('Back to overview')}</span>
            </small>
          </h3>
        </header>
        }
        <div>
          <div className={`${grid.row} ${styles.row}`}>
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>
                {this.props.t('Sender')} {this.showAvatar(this.props.value.senderId) &&
              <figure className={styles.accountVisual}>
                <AccountVisual address={this.props.value.senderId} size={43} />
              </figure>}
              </div>
              <div className={`${styles.value} ${styles.sender} `}>{this.props.value.senderId}</div>
            </div>
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>{this.props.t('Recipient')} {this.showAvatar(this.props.value.recipientId) &&
              <figure className={styles.accountVisual}>
                <AccountVisual address={this.props.value.recipientId} size={43} />
              </figure>}</div>
              <div className={styles.value}>{this.props.value.recipientId ? this.props.value.recipientId : '-'}</div>
            </div>
          </div>
          <div className={`${grid.row} ${styles.row}`}>
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>{this.props.t('Date')}</div>
              <div className={styles.value}>
                <DateFromTimestamp
                  time={this.props.value.timestamp} /> - <TimeFromTimestamp
                  time={this.props.value.timestamp}/>
              </div>
            </div>
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>{this.props.t('Amount (LSK)')}</div>
              <div className={styles.value}><Amount {...this.props}></Amount></div>
            </div>
          </div>
          <div className={`${grid.row} ${styles.row}`}>
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>{this.props.t('Additional fee')}</div>
              <div className={styles.value}><LiskAmount val={this.props.value.fee} /></div>
            </div>
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>{this.props.t('Confirmations')}</div>
              <div className={styles.value}>{this.props.value.confirmations}</div>
            </div>
          </div>
          <div className={`${grid.row} ${styles.row}`}>
            {this.props.prevStep && <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
              <div className={styles.label}>{this.props.t('Transaction ID')}</div>
              <div className={styles.value}><CopyToClipboard
                value={this.props.value.id}
                text={this.props.value.id}
                copyClassName={`${styles.copy}`} /></div>
            </div>}
            <div className={`${grid['col-xs-12']} ${grid['col-sm-6']} ${grid['col-md-6']} ${styles.column}`}>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TransactionsDetailView;