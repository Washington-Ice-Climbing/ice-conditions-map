import { Table, Input, Button, Space } from "antd";
import React from "react";
import useWindowDimensions from "../../utils/Viewport";
import ObservationExpandable from "./ObservationExpandable";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import { getRegions } from "../../utils/DataLoader";
import { useRouter } from 'next/router'
import Link from "next/link";

const regionFilters = getRegions().map(r => (
    {
        text: r.name,
        value: r.id
    }
));

class ObservationsTableClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            searchedColumn: '',
        };
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
            <div style={{ padding: 8 }}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{ width: 188, marginBottom: 8, display: 'block' }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Search
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                        Reset
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            <a>
                {
                    this.state.searchedColumn === dataIndex ? (
                        <Highlighter
                            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
                            searchWords={[this.state.searchText]}
                            autoEscape
                            textToHighlight={text ? text.toString() : ''}
                        />
                    ) : (
                        text
                    )
                }
            </a>,
    });

    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
    };

    render() {

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
                ...this.getColumnSearchProps('route')
            },
        ];

        const fullColumns = narrowColumns.concat([
            {
                title: 'Condition',
                dataIndex: 'condition',
                key: 'condition',
            },
            {
                title: 'Climbed?',
                dataIndex: 'climbed',
                key: 'climbed',
            },
            {
                title: 'Region',
                dataIndex: 'region',
                key: 'region',
                render: r => r.name,
                filters: regionFilters,
                onFilter: (value, record) => record.region.id === value,
            },
            {
                title: 'Observer',
                dataIndex: 'observerText',
                key: 'observer',
            }
        ]);

        const narrowViewport = this.props.width < '800';
        const displayColumns = narrowViewport ? narrowColumns : fullColumns;
        const expandable = narrowViewport ? {
            expandedRowRender: obs => <ObservationExpandable key={obs.id} observation={obs}/>,
            rowExpandable: () => true
        } : null;

        return (
            <div style={{width: '100%'}}>
                <Table
                    dataSource={this.props.observations}
                    columns={displayColumns}
                    expandable={expandable}
                    onRow={this.props.onRowClick}
                />
            </div>
        );
    }
}

export default function ObservationsTable(props) {
    const { height, width} = useWindowDimensions();
    const router = useRouter()
    return <ObservationsTableClass
        {...props}
        width={width}
        onRowClick={(observation, rowIndex) => {
            return {
                onClick: _ => { router.push('/observations/' + observation.id) }
            };
        }}
    />;
}