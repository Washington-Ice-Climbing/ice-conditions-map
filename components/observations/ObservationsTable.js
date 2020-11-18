import { Table, Layout } from "antd";
import React from "react";
import useWindowDimensions from "../../utils/Viewport";
import ObservationExpandable from "./ObservationExpandable";

const narrowColumns = [
    {
        title: 'Date',
        dataIndex: 'dateString',
        key: 'date',
        sorter: (a, b) => a.date > b.date,
        defaultSortOrder: 'descend',
        sortDirections: ['descend'],
    },
    {
        title: 'Route',
        dataIndex: 'route',
        key: 'route',
    },
];

const fullColumns = narrowColumns.concat([
    {
        title: 'Ice Found?',
        dataIndex: 'iceFoundText',
        key: 'found',
        sorter: (a, b) => a.iceFound > b.iceFound,
        sortDirections: ['descend'],
    },
    {
        title: 'Ice Climbed?',
        dataIndex: 'iceClimbedText',
        key: 'climbed',
        sorter: (a, b) => a.iceClimbed > b.iceClimbed,
        sortDirections: ['descend'],
    },
    {
        title: 'Region',
        dataIndex: 'region',
        key: 'region',
        filters: [
            {
                text: 'I90',
                value: 'I90',
            },
            {
                text: 'Baker',
                value: 'Baker',
            }
        ],
        onFilter: (value, record) => record.region === value
    },
    {
        title: 'Observer',
        dataIndex: 'observerText',
        key: 'observer',
    }
])

class ObservationsTableClass extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        const narrowViewport = this.props.width < '800';
        const displayColumns = narrowViewport ? narrowColumns : fullColumns;
        const expandable = narrowViewport ? {
            expandedRowRender: obs => <ObservationExpandable observation={obs}/>,
            rowExpandable: () => true
        } : null;

        return (
            <div style={{width: '100%'}}>
                <Table
                    dataSource={this.props.observations}
                    columns={displayColumns}
                    expandable={expandable}
                />
            </div>
        );
    }
}

export default function ObservationsTable(props) {
    const { height, width} = useWindowDimensions();
    return<ObservationsTableClass {...props} width={width}/>;
}