import ReactQRCode from 'react-qr-code';

const Newpay = () => {
	return (
		<div>
			<h2>Scan to Pay</h2>
			<ReactQRCode value={`upi://pay?pa=6205586065@ybl&pn=${encodeURIComponent('Ritesh Kumar Singh')}&am=504&cu=INR&tn=${'My name is AJK  '}`} />
		</div>
	);
};

export default Newpay;
